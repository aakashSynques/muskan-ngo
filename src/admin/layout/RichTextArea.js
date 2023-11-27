// import React, { useRef, useState } from "react";
// import JoditEditor from "jodit-react";

// const RichTextArea = () => {
//   const editor = useRef(null);
//   const [content, setContent] = useState("");
//   const config = {
//     readonly: false, // all options from https://xdsoft.net/jodit/docs/,
//     placeholder: "Start typings...",
//   };

//   const log = () => {
//     console.log(content);
//   };

//   return (
//     <>
//       <JoditEditor
//         ref={editor}
//         value={content}
//         config={config}
//         tabIndex={1} // tabIndex of textarea
//         onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
//         // onChange={(newContent) => {}}
//       />
//       <button onClick={log}>Log editor content</button>
//     </>
//   );
// };

// export default RichTextArea;

import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichTextArea = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey="22u0u0zsaoleip5j9vm34pwjo6xrer44g7ifi68clcnto33d"
        init={{
          plugins:
            "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "Ritik" },
            { value: "Email", title: "ritik.pawar@synques.in" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue="Welcome to TinyMCE!"
      />

      <button onClick={log}>Log editor content</button>
    </>
  );
};

export default RichTextArea;
