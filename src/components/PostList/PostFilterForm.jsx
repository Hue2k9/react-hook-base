import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func || null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchOnChange(e) {
    const value = e.target.value;
    setSearchTerm(e.target.value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current){
        clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(()=>{
        const formValues = {
            searchTerm: value,
          };
      
          onSubmit(formValues);
    }, 300);
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchOnChange}
      ></input>
    </div>
  );
}

export default PostFilterForm;
