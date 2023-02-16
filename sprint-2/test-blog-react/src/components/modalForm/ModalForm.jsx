import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { editNew } from "../../services/news";

const ModalForm = ({ show, handleClose, data = {} }) => {
  const [dataForm, setDataForm] = useState({});

  const handleChange = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(dataForm);
      const status = await editNew(dataForm);
      alert("Noticia actualizada exitosamente");
      if (status) {
        handleClose();
      }
    } catch (error) {
      console.log(error);
      alert("Hubo un error");
    }
  };

  useEffect(() => {
    if (Object.entries(data)) {
      setDataForm(data);
    }
  }, [data]);

  //   useEffect(() => {
  //     console.log(dataForm);
  //   }, [dataForm]);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edite la Noticia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titular</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese aquí el título de la noticia"
                name="title"
                value={dataForm.title ? dataForm.title : ""}
                onChange={(e) => handleChange(e)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Debe ingresar el título de la noticia"
            >
              <Form.Label>Descipción de la noticia</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={dataForm.description ? dataForm.description : ""}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Imagen de la noticia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese aquí una imagen"
                name="image"
                value={dataForm.image ? dataForm.image : ""}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de la noticia</Form.Label>
              <Form.Control
                type="date"
                name="date"
                placeholder="Ingrese aquí la fecha de publicación"
                value={dataForm.date ? dataForm.date : ""}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar cambios
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalForm;
