import React from "react";
import App from "next/app";
import Menu from "../components/menu";
import Container from "../components/Container";
import Footer from "../components/footer";
import AccessToken from "../components/AccessToken";
import Head from "next/head";
import Router from "next/router";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import withReduxStore from "../with-redux-store";
import queryString from "query-string";

import "../styles/_app.scss";
import _ from "lodash";
import axios from "axios";
import config from "../config";

class CustomApp extends App {
    static async getInitialProps({ ctx }) {
        const res = ctx.res ? ctx.res : false;
        const spotifyAuth = res.spotifyAuth || config.spotifyAuth;
        const query = res.req ? res.req.query : {};
        const host = res.req ? res.req.headers.host : "";

        let authed = false;
        let accessToken = {};
        if (query.code && host) {
            try {
                const response = await axios.post(
                    `http://${host}/spotify/auth?${queryString.stringify(
                        query
                    )}`
                );
                if (response.status == 200 && response.data) {
                    authed = true;
                    accessToken = response.data;
                }
            } catch (e) {
                console.log(e);
            }
        }

        return { query, spotifyAuth, authed: authed, at: accessToken };
    }

    constructor(props) {
        super(props);
        this.state = {
            enabled: false
        };
    }

    componentDidMount() {
        Router.replace(location.pathname);
    }

    render() {
        const { Component, pageProps, reduxStore, at } = this.props;
        const enabled = !!_.get(reduxStore.getState(), "Spotify.accessToken");
        return (
            <Provider store={reduxStore}>
                <Head key="head">
                    <title>Musikit</title>
                </Head>
                {enabled ? (
                    <React.Fragment>
                        <div className="flex-container">
                            <Menu />
                            <Container>
                                <Component {...pageProps} />
                            </Container>
                        </div>
                        <Footer />
                    </React.Fragment>
                ) : at ? (
                    <AccessToken at={at} />
                ) : null}
            </Provider>
        );
    }
}

export default withReduxStore(CustomApp);
