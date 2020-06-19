import React, { useState } from "react";
import styles from "../../components/styles/login.module.scss";
import { login } from "../../helpers/auth";
import Router from "next/router";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(form);

    if (result) {
      Router.push("/");
    }
  };

  return (
    <main className={styles.works}>
      <div className="container py-2 pt-5">
        <h1
          className="display-3 text-primary text-center mt-5 mb-5"
          data-aos="fade-down"
        >
          Login if you are the owner of the website
        </h1>
        <form
          className="row mt-5 mb-5 justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-5 col-lg-6 mx-2" data-aos="fade-right">
            <label className="text-white">User Name</label>
            <input
              value={form.username}
              type="text"
              className="form-control"
              name="username"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-5 col-lg-6 mx-2" data-aos="fade-right">
            <label className="text-white">Password</label>
            <input
              value={form.password}
              type="password"
              className="form-control"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-12 d-flex px-2 justify-content-center">
            <button
              type="submit"
              className="btn btn-lg btn-primary"
              data-aos="flip-right"
              data-aos-offset="0"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
