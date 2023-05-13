import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import axios from 'axios';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Tooltip,
  CircleMarker,
  Polygon
} from 'react-leaflet'

const colorOptions ={color:'purple'}
const centerPolygon=[
  [
    [55.881748, 37.445441],
    [55.645439, 37.394546],
    [55.683232, 37.956382],
    [55.871650, 37.854593]
  ]
]
const center=[55.755864, 37.617698]

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form',data)
    alert('Заявка отправлена')
    console.log(data);


  }
  console.log(watch("example")); 
  return (
   <div>
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
      <h2>Заполните заявку на обратную связь</h2>
      
      <div class="input-group mb-3">
      <div id="form">
        <input
        {...register('lastName',{
          required: true,
          maxLength: 30,
          pattern: /^[а-яА-Я]+$/i
        })}
        type="text"
        class="form-control"
        placeholder="Фамилия"/>
       </div>
      
       
       <div id="form">
         <input
        {...register('firstName',{
          required: true,
          maxLength: 20,
          pattern: /^[а-яА-Я]+$/i
        })}
        type="text"
        class="form-control"
        placeholder="Имя"/>
      </div>

      <div id="form">
         <input
        {...register('patronumic',{
          required: false,
          maxLength: 30,
          pattern: /^[а-яА-Я]+$/i
        })}
        type="text"
        class="form-control"
        placeholder="Отчество"/>
        </div>

      <div id="form">
         <input
        {...register('email',{
          required: true,
        })}
        type="email"
        class="form-control"
        placeholder="Email"/> 
        </div>
      </div>
      {errors?.lastName?.type==='required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.lastName?.type==='maxLength'&&(
        <p>Максимальное количество символов-30</p>
      )}
      {errors?.lastName?.type==='pattern'&&(
        <p>Поле заполнено неккоректно</p>
      )}
       {errors?.firstName?.type==='required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.firstName?.type==='maxLength'&&(
        <p>Максимальное количество символов-20</p>
      )}
      {errors?.firstName?.type==='pattern'&&(
        <p>Поле заполнено неккоректно</p>
      )}
     
      {errors?.patronumic?.type==='maxLength'&&(
        <p>Максимальное количество символов-30</p>
      )}
      {errors?.patronumic?.type==='pattern'&&(
        <p>Поле заполнено неккоректно</p>
      )}

      {errors?.email?.type==='pattern'&&(
        <p>Поле заполнено неккоректно</p>
      )}
      {errors?.email?.type==='required'&&(
        <p>Поле обязательно для заполнения</p>
      )}


      <input className='btn btn-outline-primary'  type="submit" />
    </form>
    <br></br>
    <MapContainer 
    center={center}
    zoom={10}
    style={{width:'100vw',
    height:'500px'}}>
      <TileLayer
      
        url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}@2x.png?key=wTR6U0MNjl2WsfcL9J31'
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>

        <CircleMarker
        center={center}
        pathOptions={{color:'black'}}
        radius={10}
        />
        <Marker position={center}>
          <Popup>
            Мы находимся тут
          </Popup>
          <Tooltip>
            Москва
          </Tooltip>
        </Marker>
        <Polygon positions={centerPolygon} pathOptions={colorOptions} />
    </MapContainer>
    </div>

  )
      }      
      
export default Form