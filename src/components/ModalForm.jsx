import { useState } from "react";



function ModalForm(props) {

    const {
        title,
        description,
        handleEdit,
        id,
        isModalShown,
        handleToggle
    } = props

    const [formData, setFormData] = useState({
        title, description, id
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEdit(id, formData)
        handleToggle()
    }

    const handleClose = (e) => {
        e.preventDefault()
        handleToggle()
    }

    return (
        <div className={`modal-${isModalShown ? 'open' : 'close'}`}>
            <form className="modal--form" onSubmit={handleSubmit}>
                <button
                    className="close--btn"
                    onClick={handleClose}
                >
                    X
                </button>

                <input
                    onChange={handleChange}
                    name="title"
                    value={formData.title}
                />

                <textarea
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                    rows={10}
                />

                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default ModalForm;