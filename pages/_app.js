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

import "../styles/_app.scss";
import _ from "lodash";
import axios from "axios";
import config from "../config";
import { SetAccessToken, UserMe } from "../actions/Spotify";

class CustomApp extends App {
    static async getInitialProps({ ctx }) {
        const res = ctx.res ? ctx.res : false;
        const spotifyAuth = res.spotifyAuth || config.spotifyAuth;
        const query = res.req ? res.req.query : {};
        const host = res.req ? res.req.headers.host : "";

        let authed = false;
        let accessToken = {};
        return {
            query,
            host,
            spotifyAuth,
            authed: authed,
            at: accessToken
        };
    }

    async componentDidMount() {
        const { query, host, reduxStore } = this.props;
        await reduxStore.dispatch(SetAccessToken({ query: query, host: host }));
        Router.replace(location.pathname);
    }

    render() {
        console.log("asd", this.props.reduxStore.getState());
        const { Component, pageProps, reduxStore } = this.props;
        const enabled = !!_.get(reduxStore.getState(), "Spotify.accessToken");
        return (
            <Provider store={reduxStore}>
                <Head key="head">
                    <title>Musikit</title>
                </Head>
                {enabled && (
                    <React.Fragment>
                        <div className="flex-container">
                            <Menu />
                            <Container>
                                <Component {...pageProps} />
                            </Container>
                        </div>
                        <Footer />
                    </React.Fragment>
                )}
            </Provider>
        );
    }
}

export default withReduxStore(CustomApp);
