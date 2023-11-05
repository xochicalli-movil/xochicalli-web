import { jsx as _jsx } from "react/jsx-runtime";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
const TagsCategories = ({ setTags }) => {
    const handleChange = (tags) => {
        setTags({ tags });
    };
    return _jsx(TagsInput, { value: setTags, onChange: handleChange });
};
export default TagsCategories;
