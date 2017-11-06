/* 
{
  "email": "hansbaker90@gmail.com",
  "email_verified": false,
  "user_id": "auth0|59fdd9d5b84acc463c6e66c7",
  "clientID": "UKIwDCenBjbd2FNtslghUvHaBVygCaBt",
  "picture": "https://s.gravatar.com/avatar/65d0c41e072b5714dcf43bfd521e0b2b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png",
  "nickname": "hansbaker90",
  "identities": [
    {
      "user_id": "59fdd9d5b84acc463c6e66c7",
      "provider": "auth0",
      "connection": "Username-Password-Authentication",
      "isSocial": false
    }
  ],
  "updated_at": "2017-11-04T15:17:28.755Z",
  "created_at": "2017-11-04T15:16:37.407Z",
  "name": "hansbaker90@gmail.com",
  "sub": "auth0|59fdd9d5b84acc463c6e66c7"
}

 */

export class User {
    picture: URL;
    nickname: string;
    name: string;
    email: string;
    verified: boolean;

    constructor(user: Object){
        this.picture = user['picture'];
        this.nickname = user['nickname'];
        this.name = user['name'];
        this.email = user['email'];
        this.verified = user['email_verified'];
    }
}