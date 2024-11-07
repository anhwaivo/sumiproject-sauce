exports.name = '/github/info';
const moment = require('moment');
const axios = require('axios');
const fs = require('fs-extra');

exports.index = async (req, res, next) => {
   var username = req.query.username
   if (!username || !username.trim()) {
      return res.jsonp("Thiếu username github");
    }
  try {
    const { data } = await axios.get(`https://api.github.com/users/${username}`);
    const login = data.login;
    const avatar_url = data.avatar_url;
    const name = data.name;
    const id = data.id;
    const html_url = data.html_url;
    const public_repos = data.public_repos;
    const followers = data.followers;
    const following = data.following;
    const ocation = data.ocation;
    const created_at = data.created_at;
    const bio = data.bio;
    const location = data.location;
    const day = created_at.split("-")[2].split("T")[0];
    const month = created_at.split("-")[1].split("T")[0];
    const year = created_at.split("-")[0];
    const hour = created_at.split("T")[1].split(":")[0];
    const min = created_at.split(":")[1].split("+")[0];
    const ss = created_at.split(":")[2].split("+")[0];
    res.json({
      login: data.login,
      avatar_url: data.avatar_url,
      name: data.name,
      id: data.id,
      html_url: data.html_url,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      ocation: data.ocation,
      ngay_tao: `${day}/${month}/${year}`,
      gio_tao: `${hour}:${min}:${ss}`,
      bio: bio,
      location: location,
      author: 'Dũngkon SUMIPROJECT'
    });
  } catch (e) {
    console.log(e);
  }
};
