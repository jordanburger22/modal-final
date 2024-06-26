import ModalForm from "./ModalForm";
import { useState } from "react";

function Post(props) {

    const { title, description, handleEdit, id } = props

    const [isModalShown, setIsModalShown] = useState(false)

    const handleToggle = () => setIsModalShown(!isModalShown)

    return (
        <>
            <div className="post">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <button onClick={handleToggle}>Edit</button>
            </div>
            <div className={isModalShown ? 'overlay-show': 'overlay' }></div>
                <ModalForm
                    title={title}
                    description={description}
                    handleEdit={handleEdit}
                    id={id}
                    isModalShown={isModalShown}
                    handleToggle={handleToggle}
                />
        </>
    );
}

export default Post;