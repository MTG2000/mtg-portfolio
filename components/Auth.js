import React from "react";
import cookie from "cookie";
import Router from "next/router";

export function withAuthServerSideProps(getServerSidePropsFunc) {
  return async (context) => {
    const user = await getUser(context);
    if (getServerSidePropsFunc) {
      return {
        props: { user, data: await getServerSidePropsFunc(context, user) },
      };
    }
    return { props: { user, data: { props: { user } } } };
  };
}

async function getUser(context) {
  const { accessToken = "" } = cookie.parse(context.req.headers.cookie || "");

  //   IF not authorized , redirect to login
  if (!accessToken) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
  }

  return { accessToken };
}

// withAuthComponent.js
export function withAuthComponent(Component) {
  return ({ user, data }) => {
    if (!user) {
      Router.push("/login");
    }
    return <Component {...data.props} />;
  };
}
