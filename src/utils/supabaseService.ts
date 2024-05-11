// utils/supabaseService.ts
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Key must be provided.");
}

const supabase = createClient(supabaseUrl, supabaseKey);


export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  user_id?: string;
}

export async function addProduct(jsonProductData: string): Promise<any> {


  const productData = JSON.parse(jsonProductData);

  // Set a default value for user_id if it's not provided
  const product_data: Product = {
    ...productData,
    user_id: productData.user_id || '953860db-1b0f-41ed-be18-e9915ec5cc1f',
  };

  const { data, error } = await supabase
    .from('products')
    .insert([product_data]);

  if (error) {
    const response = JSON.stringify(error);
    throw response;
  }
  const reponse = JSON.stringify(data);
  return reponse;
}


export async function getProducts(): Promise<string> {
  const { data, error } = await supabase
    .from('products')
    .select('*');
  if (error) {
    const response = JSON.stringify(error);
    throw response;
  }
  const response = JSON.stringify(data);
  return response;
}

export async function deleteProduct(productId: string): Promise<any> {
  const { data, error } = await supabase
    .from('products')
    .delete()
    .eq('id', productId);
  if (error) {
    const response = JSON.stringify(error);
    console.log(response);
    throw response;
  }
  const response = JSON.stringify(data);
  console.log(response);
  return response;
}


export default supabase;
