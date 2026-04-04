import React from 'react';
import { Link } from 'react-router';

const View = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Blog Title</h2>
            </div>
            <div className="card-body">
                <h5>Blog Title</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem vero quisquam voluptatum officiis eius, rerum inventore corporis impedit qui ut ea repellat provident pariatur soluta tenetur corrupti iure a. Rem aliquam corrupti architecto adipisci odit cupiditate molestiae, laborum eligendi magnam accusantium enim, hic quibusdam temporibus ipsum facere voluptatum, molestias quam praesentium. Dolores deserunt tempore at, neque nulla inventore nam vitae cupiditate beatae repudiandae, dicta ullam id accusamus hic explicabo maxime aspernatur. Impedit corrupti quisquam cupiditate, recusandae placeat aspernatur dolor voluptatum id modi dolorem suscipit. Similique expedita rerum quam quae repudiandae sed aliquid, consequatur veritatis fuga totam earum animi officiis. Quia sint, assumenda velit, id modi eos, fuga ipsam nihil voluptate dicta ex reprehenderit cumque quaerat? Qui cumque totam tempore, excepturi ab dolorum autem magni aut, ducimus non officiis temporibus corporis impedit! Quas voluptatem tenetur optio eum quos rerum non quidem architecto. Dolorem ducimus maiores, tempore sapiente repellendus provident eos rem.</p>
            </div>
            <div className="card-footer">
                <button className='btn btn-danger w-100 my-1'>Delete Blog</button>
                <Link className='btn btn-secondary w-100 my-1' to={'/editBlog'}>Edit Blog</Link>
                
            </div>
        </div>
    );
}

export default View;
