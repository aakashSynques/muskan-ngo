import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Form, InputGroup } from "react-bootstrap";
import { fetch } from "../../utils";
import { Table } from "ka-table";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegTrashAlt } from "react-icons/fa";

const bootstrapChildComponents = {
  table: {
    elementAttributes: () => ({
      className: "table table-striped table-hover table-bordered ",
    }),
  },
  tableHead: {
    elementAttributes: () => ({
      className: "thead-dark",
    }),
  },
  noDataRow: {
    content: () => "No Data Found",
  },
};

const AdminSubCategoryAttributeGroup = () => {
  const [searchText, setSearchText] = useState("");

  const [attributeData, setAttributeData] = useState([]);

  const [subCateAttrGroup, setSubCateAttrGroup] = useState({
    list: [],
    loading: false,
  });

  const getSubCateAttrGroup = async () => {
    try {
      setSubCateAttrGroup({ list: [], loading: true });
      const response = await fetch(
        "sub-cate-attr-group/all",
        "GET",
        null,
        null
      );
      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          const tableData = await data.sub_categorys.map((item, index) => {
            return {
              id: index + 1,
              sub_category_id: item.sub_category_id,
              sub_category_name: item.sub_category_name,
              category_name: item.category_name,
              action: {
                sub_category_id: item.sub_category_id,
                attributes: item.attributes,
              },
            };
          });
          setSubCateAttrGroup({ list: tableData, loading: false });
        }
      }
    } catch (error) {
      setSubCateAttrGroup({ list: [], loading: false });
    } finally {
      setSubCateAttrGroup((prev) => ({ list: prev.list, loading: false }));
    }
  };

  const deleteSubCateAtteGroup = async (group_id) => {
    try {
      const response = await fetch(
        "sub-cate-attr-group/delete",
        "DELETE",
        { group_id },
        null
      );
      if (response.status === 200) {
        const { success } = response.data;
        if (success === true) {
          getSubCateAttrGroup();
        }
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error?.response?.data?.message);
      } else if (error && error.message) {
        alert(error?.message);
      } else {
        alert("Something went wrong.");
      }
    }
  };

  const getAttributeList = async () => {
    try {
      setAttributeData([]);
      const response = await fetch("attribute/all", "GET", null, null);
      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          setAttributeData(data.attribute_list);
        }
      }
    } catch (error) {
      setAttributeData([]);
    }
  };

  useEffect(() => {
    getSubCateAttrGroup();
    getAttributeList();
  }, []);

  return (
    <div className="container-fluid">
      <Breadcrumb className="p-2">
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Sub-Category Attribute Group</Breadcrumb.Item>
      </Breadcrumb>

      <section className="content">
        <div className="container-fluid">
          <Card>
            <Card.Header>
              <h4>Sub-Category Attribute Group </h4>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="co-sm-12">
                  <input
                    type="search"
                    value={searchText}
                    onChange={(event) => {
                      setSearchText(event.currentTarget.value);
                    }}
                    className="top-element pull-right m-2"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <Table
                    loading={{
                      enabled: subCateAttrGroup.loading,
                      text: "Loading data",
                    }}
                    columns={[
                      {
                        key: "id",
                        title: "Sr.No.",
                        width: "10%",
                      },
                      {
                        key: "sub_category_name",
                        title: "Sub Category",
                        width: "30%",
                      },
                      {
                        key: "category_name",
                        title: "Category",
                        width: "35%",
                      },
                      {
                        key: "action",
                        title: "Connected Attributes",
                        width: "30%",
                      },
                    ]}
                    format={({ column, value }) => {
                      if (column.key === "id") {
                        return `${value}.`;
                      }
                      if (column.key === "action") {
                        return (
                          <AddAttributeGroupFrom
                            getSubCateAttrGroup={getSubCateAttrGroup}
                            attributeData={attributeData}
                            sub_category_id={value.sub_category_id}
                            attributes={value?.attributes}
                            deleteSubCateAtteGroup={deleteSubCateAtteGroup}
                          />
                        );
                      }
                    }}
                    data={subCateAttrGroup.list}
                    search={({
                      searchText: searchTextValue,
                      rowData,
                      column,
                    }) => {
                      if (column.key === "passed") {
                        return (
                          (searchTextValue === "false" && !rowData.passed) ||
                          (searchTextValue === "true" && rowData.passed)
                        );
                      }
                    }}
                    rowKeyField={"id"}
                    searchText={searchText}
                    noData={{
                      text: "No Data Found",
                    }}
                    childComponents={bootstrapChildComponents}
                  />
                </div>
              </div>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
};

const AddAttributeGroupFrom = ({
  attributeData,
  getSubCateAttrGroup,
  sub_category_id,
  attributes,
  deleteSubCateAtteGroup,
}) => {
  const [formState, setFormState] = useState({ loading: false, message: null });
  const [newAttributeData, setNewAttributeData] = useState([]);
  const schema = z.object({
    attribute_id: z
      .string()
      .min(1, { message: "select attribute is required." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { attribute_id: "" },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    let newArray = [];
    if (attributes.length > 0 && attributeData.length > 0) {
      newArray = attributeData?.filter((attribute) => {
        return !attributes?.some(
          (excludeAttribute) =>
            excludeAttribute?.attribute_id === attribute?.attribute_id
        );
      });
    } else {
      newArray = attributeData;
    }
    setNewAttributeData(newArray);
  }, [attributeData, attributes]);

  const onSubmit = async (data) => {
    try {
      setFormState({ loading: true, message: null });
      const response = await fetch(
        "sub-cate-attr-group/add",
        "POST",
        { ...data, sub_category_id },
        null
      );
      if (response.status === 201) {
        const { success } = response.data;
        if (success === true) {
          getSubCateAttrGroup();
          reset();
          return true;
        }
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else if (error && error.message) {
        alert(error.message);
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setFormState({ loading: false, message: null });
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup className="mb-3">
            <Form.Select
              aria-label=""
              size="sm"
              isInvalid={!!errors.attribute_id?.message}
              {...register("attribute_id")}
            >
              <option value=""> -- select -- </option>
              {newAttributeData?.map((attribute, index) => {
                return (
                  <option
                    key={`option_${index}`}
                    value={attribute.attribute_id}
                  >
                    {attribute.attribute_name}
                  </option>
                );
              })}
            </Form.Select>
            <Button
              variant="outline-secondary"
              id="button-addon2"
              size="sm"
              onClick={handleSubmit(onSubmit)}
            >
              {formState.loading ? "Loading..." : "Add"}
            </Button>
          </InputGroup>
        </Form>
      </div>
      <div className="col-12">
        {attributes ? (
          <ul>
            {attributes?.map(function (attribute) {
              return (
                <li key={attribute.attribute_id}>
                  {attribute.attribute_name}{" "}
                  <FaRegTrashAlt
                    onClick={() => {
                      deleteSubCateAtteGroup(attribute.group_id);
                    }}
                    color="red"
                    size={10}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-danger text-center">no attributes connected.</p>
        )}
      </div>
    </div>
  );
};

export default AdminSubCategoryAttributeGroup;
