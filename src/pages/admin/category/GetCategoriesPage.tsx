import api from "@/services/config/axiosConfig";
import { useEffect, useState } from "react";
import axios from "axios";
import { CATEGORIESAPI } from "@/services/api/api";
type ICategory = {
  _id: string;
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  createdBy: {
    _id: string;
    username: string;
  };
  createdAt: string;
  updatedAt: string;
};

const GetCategoriesPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get<{ categories: ICategory[] }>(
          CATEGORIESAPI,
        );
        // const response =await api.get(CATEGORIESAPI,{ withCredentials: false });
        console.log("baseURL:", axios.defaults.baseURL);
        setCategories(response.data.categories);
        console.log(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);
  return (
    <div>
      <h1>GetCategoriesPage</h1>
      <div className="">
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>category name</th>
                  <th>slug</th>
                  <th>created at</th>
                  <th>updated at</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category._id}>
                    <td>{category._id}</td>
                    <td>{category.name}</td>
                    <td>{category.slug}</td>
                    <td>{category?.description}</td>
                    <td>{category.image}</td>
                    <td>{category.createdAt}</td>
                    <td>{category.updatedAt}</td>
                    <td className="flex items-center gap-x-1">
                      <button className="btn btn-primary">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCategoriesPage;
