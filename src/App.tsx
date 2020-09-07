import React from 'react';
import { makeStyles, FormControl, Input, InputLabel, Button } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import './App.css';
import axios from 'axios';

enum FormData {
    id = 'id',
    name = 'name',
    host_id = 'host_id',
    host_name = 'host_name',
    neighbourhood_group = 'neighbourhood_group',
    neighbourhood = 'neighbourhood',
    latitude = 'latitude',
    longitude = 'longitude',
    room_type = 'room_type',
    price = 'price',
    minimum_nights = 'minimum_nights',
    number_of_reviews = 'number_of_reviews',
    last_review = 'last_review',
    reviews_per_month = 'reviews_per_month',
    calculated_host_listings_count = 'calculated_host_listings_count',
    availability_365 = 'availability_365',
    column_16 = 'column_16',
    column_17 = 'column_17',
}

const requestData = (values: Record<FormData, any>) => {
    return ({
        "Inputs": {
            "input1": {
            "ColumnNames": [
                "id",
                "name",
                "host_id",
                "host_name",
                "neighbourhood_group",
                "neighbourhood",
                "latitude",
                "longitude",
                "room_type",
                "price",
                "minimum_nights",
                "number_of_reviews",
                "last_review",
                "reviews_per_month",
                "calculated_host_listings_count",
                "availability_365",
                "Column 16",
                "Column 17"
            ],
            "Values": [
                [
                    values.id,
                    values.name,
                    values.host_id,
                    values.host_name,
                    values.neighbourhood_group,
                    values.neighbourhood,
                    values.latitude,
                    values.longitude,
                    values.room_type,
                    values.price,
                    values.minimum_nights,
                    values.number_of_reviews,
                    values.last_review,
                    values.reviews_per_month,
                    values.calculated_host_listings_count,
                    values.availability_365,
                    "0",
                    "0"
                ],
            ]},
        },
        "GlobalParameters": {}
    });
}

const App = () => {
    const classes = useClasses();
    const { handleSubmit, control } = useForm<Record<FormData, any>>();

	const onSubmit = React.useCallback((values: Record<FormData, any>) => {
        const data: any = requestData(values);
        axios.post(process.env.REACT_APP_API_URL!, data, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY!,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
	}, []);

    return (
        <div className={classes.app}>
            <header className={classes.header}>
                <h1>Airbnb Price Prediction</h1>
            </header>
            <main className={classes.main}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.id} className={classes.inputLabel}>
                            {FormData.id.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.id}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.name} className={classes.inputLabel}>
                            {FormData.name.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.name}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.host_id} className={classes.inputLabel}>
                            {FormData.host_id.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.host_id}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.host_name} className={classes.inputLabel}>
                            {FormData.host_name.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.host_name}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.neighbourhood_group} className={classes.inputLabel}>
                            {FormData.neighbourhood_group.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.neighbourhood_group}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.neighbourhood} className={classes.inputLabel}>
                            {FormData.neighbourhood.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.neighbourhood}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.latitude} className={classes.inputLabel}>
                            {FormData.latitude.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.latitude}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.longitude} className={classes.inputLabel}>
                            {FormData.longitude.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.longitude}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.room_type} className={classes.inputLabel}>
                            {FormData.room_type.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.room_type}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.price} className={classes.inputLabel}>
                            {FormData.price.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.price}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.minimum_nights} className={classes.inputLabel}>
                            {FormData.minimum_nights.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.minimum_nights}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.number_of_reviews} className={classes.inputLabel}>
                            {FormData.number_of_reviews.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.number_of_reviews}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.last_review} className={classes.inputLabel}>
                            {FormData.last_review.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.last_review}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.reviews_per_month} className={classes.inputLabel}>
                            {FormData.reviews_per_month.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.reviews_per_month}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.calculated_host_listings_count} className={classes.inputLabel}>
                            {FormData.calculated_host_listings_count.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.calculated_host_listings_count}
                        />
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor={FormData.availability_365} className={classes.inputLabel}>
                            {FormData.availability_365.toUpperCase()}
                        </InputLabel>
                        <Controller
                            as={
                                <Input />
                            }
                            control={control}
                            defaultValue=""
                            name={FormData.availability_365}
                        />
                    </FormControl>

                    <Button type='submit' variant='contained' className={classes.button}>
						Submit
					</Button>
                </form>
            </main>
        </div>
    );
}

export default App;

const useClasses = makeStyles({
    app: {
        textAlign: 'center',
        backgroundColor: '#282c34',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        minHeight: '100vh',
        paddingBottom: '50px',
    },
    header: {
        margin: '0px',
        padding: '20px',
    },
    main: {
        backgroundColor: 'white',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
    },
    formControl: {
        width: '100%',
        paddingTop: '8px',
        paddingBottom: '8px',
    },
    inputLabel: {
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        marginTop: '20px',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
})
