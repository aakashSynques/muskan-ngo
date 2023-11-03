// cartUtils.js
export const addToCart = (product, dispatch) => {
    const cartItemData = {
      attributes: product.attributes,
      product_name: product.product_name,
      product_MSP: product.product_MSP,
      brand_id: product.brand_id,
      category_id: product.category_id,
      gst_id: product.gst_id,
      gst_percent: product.gst_percent,
      images: product.images,
      in_stock_status: product.in_stock_status,
      is_delete: product.is_delete,
      product_MRP: product.product_MRP,
      product_additional_information: product.product_additional_information,
      product_code: product.product_code,
      product_description: product.product_description,
      product_id: product.product_id,
      product_name_disp: product.product_name_disp,
      product_sku: product.product_sku,
      product_slug: product.product_slug,
      product_thumbnail: product.product_thumbnail,
      sub_category_id: product.sub_category_id,
      quantity: 1,
      subTotal: product.product_MSP,
    };
    dispatch(addToCart(cartItemData)); // Dispatch the action to add the product to the cart
  };
  