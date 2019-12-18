import axios from 'axios'

const url = 'http://localhost:5000/api/slide/';

class PostService3 {
    //get post
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,                    
                    }))
                );
            }catch(err){
                reject(err);
            }
        })
    }

    //create post
    static insertPost(resim) {
        return axios.post(url, {
            resim,
        });
        
    }

    //delete post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostService3;