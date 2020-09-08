import { FormData } from '../App';

const requestData = (values: Record<FormData, any>) => {
	return {
		Inputs: {
			input1: {
				ColumnNames: [
					'id',
					'name',
					'host_id',
					'host_name',
					'neighbourhood_group',
					'neighbourhood',
					'latitude',
					'longitude',
					'room_type',
					'price',
					'minimum_nights',
					'number_of_reviews',
					'last_review',
					'reviews_per_month',
					'calculated_host_listings_count',
					'availability_365',
					'Column 16',
					'Column 17',
				],
				Values: [
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
						'0',
						'0',
					],
				],
			},
		},
		GlobalParameters: {},
	};
};

export default requestData;
