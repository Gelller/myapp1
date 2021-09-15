import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useCallback } from "react";
import { getDog } from './actions'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
    },

    imageWrapper: {
        minWidth: "450px",
        minHeight: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    dogImg: {
        width: "100%",
        height: "100%",
    },
}));


const Dog = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.dog);
    console.log(data, loading, error);

    if (data !== null) {
        var format = data.url.toString().slice(-4);
    }
    const getThunkDogPhoto = useCallback(
        () => dispatch(getDog()),
        [dispatch]
    );

    useEffect(() => {
        getThunkDogPhoto();
    }, [getThunkDogPhoto]);

    return (
        < div className={classes.wrapper} > Dog
            <div className={classes.imageWrapper}>
                {loading && <CircularProgress />}
                {error && <div>Возникла ошибка</div>}

                {!loading && !error && data && (format == ".jpg" || format == ".Jpg" || format == ".JPG" || format == "jpeg" || format == ".png" || format == ".PNG") && (

                    <img className={classes.dogImg} src={data.url} alt="Dog" />
                )}

                {!loading && !error && data && format == ".mp4" && (

                    <video className={classes.dogImg} controls="" autoplay="" name="media" alt="Dog">
                        <source src={data.url} type="video/mp4" /></video>
                )}
                {!loading && !error && data && format == ".gif" && (

                    <img className={classes.dogImg} src={data.url} width="175" height="303" alt="Dog" />
                )}

            </div>

            <Button
                variant="contained"
                color="primary"
                disabled={loading}
                onClick={() => getThunkDogPhoto()}

            >
                Покажи Собаку
            </Button>

        </div>
    )
}
export default Dog