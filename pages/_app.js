import React from "react";
import App from "next/app";
import Menu from "../components/menu";
import Container from "../components/Container";
import Footer from "../components/footer";
import Head from "next/head";
import Router from "next/router";
import Cookies from "js-cookie";
import { initializeStore } from "../store";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import withReduxStore from "../with-redux-store";
import parseCookies from "parse-cookies.js";

import "../styles/_app.scss";
import _ from "lodash";
import axios from "axios";
import config from "../config";

class CustomApp extends App {
    static async getInitialProps({ ctx }) {
        const res = ctx.res ? ctx.res : false;
        const spotifyAuth = res.spotifyAuth || config.spotifyAuth;
        const query = res.req ? res.req.query : {};
        const cookies = res.req ? res.req.cookies : {};

        return { query, cookies, spotifyAuth };
    }

    componentDidMount() {
        const { query, cookies, spotifyAuth } = this.props;
        if (!cookies.code && !query.code) {
            Router.replace(spotifyAuth);
        } else if (query.code && !cookies.code) {
            Cookies.set("code", query.code);
            Router.replace(location.pathname);
        }
    }
    render() {
        const { Component, pageProps, reduxStore, router } = this.props;
        return (
            <Provider store={reduxStore}>
                <Head key="head">
                    <title>Musikit</title>
                </Head>
                <div className="flex-container">
                    <Menu />
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </div>
                <Footer />
            </Provider>
        );
    }
}

export default withReduxStore(CustomApp);
