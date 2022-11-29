import axios from "axios";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const shazamCoreApi=createApi({
      reducerPath: 'shazamCoreApi',
      baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                  headers.set('X-RapidAPI-Key', '8edce7a24cmsh679064fd6c00291p102d3ajsn73bf208c006d');

                  return headers;
            },
      }),
      endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => '/charts/world'}),
      }),
});

export const {
      useGetTopChartsQuery,
}=shazamCoreApi;