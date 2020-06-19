import React, { useState } from "react";
import styles from "../../../components/styles/addProject.module.scss";
import axios from "axios";
import Router from "next/router";
import {
  withAuthServerSideProps,
  withAuthComponent,
} from "../../../components/Auth";

const AddProject = () => {
  const [form, setForm] = useState({
    name: "",
    url: "",
    img: "",
    tags: "",
    code: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...form,
      tags: JSON.stringify(form.tags.split(" ")),
    };
    const response = await axios.post("/api/projects/add", {
      data,
    });
    if (response.data.success) Router.push("/projects");
  };

  return (
    <main className={styles.addProject}>
      <div className="container py-2 pt-5">
        <h1
          className="display-3 text-primary text-center mt-5 mb-5"
          data-aos="fade-down"
        >
          Add Project
        </h1>
        <form className="row mt-5 mb-5" onSubmit={handleSubmit}>
          <h2 className="text-primary col-lg-12 mt-5" data-aos="fade-right">
            Details Of The Project
          </h2>
          <div className="form-group mb-5 col-lg-6" data-aos="fade-right">
            <label className="text-white">Project Title</label>
            <input
              value={form.name}
              type="text"
              className="form-control"
              placeholder="eg.Steam Store"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-5 col-lg-6" data-aos="fade-right">
            <label className="text-white">Project Link</label>
            <input
              value={form.url}
              type="text"
              className="form-control"
              placeholder="eg.store.steampowerd.com"
              name="url"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-5 col-lg-6" data-aos="fade-right">
            <label className="text-white">Project Link Code</label>
            <input
              value={form.code}
              type="text"
              className="form-control"
              placeholder="eg.github.io/steam-project"
              name="code"
              onChange={handleChange}
            />
          </div>
          <div
            className="form-group mb-5 col-lg-6"
            data-aos="fade-right"
            data-aos-offset="0"
          >
            <label className="text-white">Project Image Link</label>
            <input
              value={form.img}
              type="text"
              className="form-control"
              placeholder="eg.drive.google.com/image.jpg"
              name="img"
              onChange={handleChange}
              required
            />
          </div>
          <div
            className="form-group mb-5 col-lg-6"
            data-aos="fade-right"
            data-aos-offset="0"
          >
            <label className="text-white">Project Tags</label>
            <input
              value={form.tags}
              type="text"
              className="form-control"
              placeholder="Enter space seperated tags : 'React Node-js'"
              name="tags"
              onChange={handleChange}
            />
          </div>

          <div className="col-12 d-flex px-2">
            <button
              type="submit"
              className="btn btn-lg btn-primary"
              data-aos="flip-right"
              data-aos-offset="0"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export const getServerSideProps = withAuthServerSideProps();

export default withAuthComponent(AddProject);
