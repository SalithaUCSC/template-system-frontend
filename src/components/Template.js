import {useEffect, useState} from "react";

const Template = ({template}) => {
    const [templateData, setTemplateData] = useState({});
    useEffect(() => {
        setTemplateData(template);
    }, [template]);
    return (
        <div>
            {templateData.name}
            <br/>
            {templateData.description}
            <br/>
            <br/>
        </div>
    );
}

export default Template;
