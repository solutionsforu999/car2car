import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'




export const getCars = createAsyncThunk('getCars', async (params) => {
    // `https://cars-data3.p.rapidapi.com/cars-data?limit=${params[0]}&skip=${params[1]}`
    const res = await fetch(`https://car2car-express-server.vercel.app/getCars?limit=${params[0]}&skip=${params[1]}`, {
        method: 'get',
        // headers: {
        //     'X-RapidAPI-Key': '9213b9aa7emsh8137df15af8853bp1b7cdajsn57fcb4e947f3',
        //     'X-RapidAPI-Host': 'cars-data3.p.rapidapi.com'
        // }
    });
    if (!res.ok) {
        throw Error('Error Fetching!..');
    }
    return res.json();
})

const iconslice = createSlice({
    name: "main",
    initialState: {
        ttlcars:0,
        cars: [],
        statusCars: 'idle',
        errorCars: null,
        filtredCars:[]
    },
    reducers: {
        filterallCars:(state,action)=>{
            state.filtredCars=[];
            let main=state.filtredCars;
            let cars=state.cars;
            const params=action.payload;
            const paramsKeys=Object.keys(params);
            let filtred=[];
            for(let p=0;p<paramsKeys.length;p++){
                if(params[paramsKeys[p]]!==''){
                    if(filtred.length===0){
                        if(paramsKeys[p]==='model'||paramsKeys[p]==='brand'){
                            filtred=cars.filter(car=>car[paramsKeys[p]].toString().toLowerCase().includes(params[paramsKeys[p]].toString().toLowerCase()));

                        }else{
                            filtred=cars.filter(car=>car[paramsKeys[p]].toString().toLowerCase()===params[paramsKeys[p]].toString().toLowerCase());
                        }
                    }else{
                        if(paramsKeys[p]==='model'||paramsKeys[p]==='brand'){
                            filtred=filtred.filter(car=>car[paramsKeys[p]].toString().toLowerCase().includes(params[paramsKeys[p]].toString().toLowerCase()))
                        }else{
                            filtred=filtred.filter(car=>car[paramsKeys[p]].toString().toLowerCase()===params[paramsKeys[p]].toString().toLowerCase())
                        }
                    }
                }
            }
            state.filtredCars=filtred;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getCars.pending, (state) => {
                state.statusCars = 'loading';
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.ttlcars=action.payload.total_matches;
                state.cars = [...state.cars,...action.payload.cars];
                state.statusCars = 'success';
            })
            .addCase(getCars.rejected, (state) => {
                state.statusCars = 'failed';
            })
})
export const { iconMoon, iconSun ,filterallCars} = iconslice.actions;
export default iconslice.reducer;

export const allCars = (state) => state.main.cars;
export const total_matches = (state) => state.main.ttlcars;
export const allCarsError = (state) => state.main.errorCars;
export const allCarsStatus = (state) => state.main.statusCars;

export const allfiltredCars = (state) => state.main.filtredCars;
