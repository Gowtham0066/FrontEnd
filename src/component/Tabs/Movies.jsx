import React from "react";
import "../Tabs/Movies.css";
import Project from "../../Project/Project";

const Movies = () => {
  const list = [
    {
      img: "https://images.pexels.com/photos/19740918/pexels-photo-19740918/free-photo-of-goat-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "samy",
      desc: "lorem good",
      link: "https://www.google.com",
    },{
      img: "https://images.pexels.com/photos/19740918/pexels-photo-19740918/free-photo-of-goat-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "samy",
      desc: "lorem good",
      link: "https://www.google.com",
    },{
      img: "https://images.pexels.com/photos/19740918/pexels-photo-19740918/free-photo-of-goat-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "samy",
      desc: "lorem good",
      link: "https://www.google.com",
    },{
      img: "https://images.pexels.com/photos/19740918/pexels-photo-19740918/free-photo-of-goat-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "samy",
      desc: "lorem good",
      link: "https://www.google.com",
    },{
      img: "https://images.pexels.com/photos/19740918/pexels-photo-19740918/free-photo-of-goat-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "samy",
      desc: "lorem good",
      link: "https://www.google.com",
    },
    
  ];
  return (
    <div className="projectContainer">
      <h1>Movies</h1>
      <div className="Movies__List">
        {list.map((list, index) => {
          return (
            <Project
              key={index}
              img={list.img}
              title={list.title}
              desc={list.desc}
              link={list.link}
            ></Project>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
