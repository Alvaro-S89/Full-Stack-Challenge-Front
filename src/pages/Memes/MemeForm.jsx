import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../shared/components/form-hook';
import Input from '../../shared/components/input';
import FormButton from '../../shared/components/form-button';

import { API } from '../../shared/services/api';
import Navbar from "../../shared/components/navbar";

const MemeForm = () => {
    
    const[categoryOptions, setCategoryOptions] = useState([])
    const[categories, setCategories] = useState(null)
    const[image, setImage] = useState(null)

    useEffect(() => {
        API.get('/categories').then(res => {
            setCategoryOptions(res.data.list)
        })
    }, [1])

    const [formState, inputHandler] = useForm({
        description: { value: '' }
    })

    const[isError, setIsError] = useState(null)

    const navigate = useNavigate()

    const selectChangeHandler = event => {
        setCategories(event.target.value)
    }

    const uploadImageHandler = event => {
        setImage(event.target.files[0])
    }

    const submitHandler = event => {
        event.preventDefault()

        const memePayload = {
            description: formState.inputs.description.value,
            categories: [categories],
            file: image
        }

        API.post('/memes', memePayload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            return navigate('/')
        }).catch(err => {
            setIsError(err.response.data.message)

            setTimeout(() => {
                setIsError(null)
            }, 5000)
        })
    }

    return (
        <>
        <Navbar />
        <form onSubmit={submitHandler}>
            {/* {isError && 
                <span className="inline-flex font-bold text-red-700"> { isError } </span>
            } */}

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Meme
                </label>
                <input id="image" type="file" 
                    onChange={uploadImageHandler}
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <Input element="textarea" id="description" label="Description" onInput={inputHandler} />
            
            <div className="mb-4">
                <label 
                    className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="categories"
                >
                    Category
                </label>
                <select name="categories" onChange={selectChangeHandler}>
                    {categoryOptions.map((option) => {
                        return (<option key={option.name} value={option._id}>{option.name}</option>)
                    })}
                </select>
            </div>

            <FormButton onClick={submitHandler} type="submit" text="UPLOAD" />
        </form>
        </>
    );
}

export default MemeForm