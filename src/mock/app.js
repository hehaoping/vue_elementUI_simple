import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock = window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const members = {
  data: [
    {
      id: 1,
      username: 'admin',
      realname: '超级管理员1',
      status: '启用',
      email: '1751619105#qq.com',
      pwdquestion: '1daye',
      pwdanswer: '1daye'
    },
    {
      id: 2,
      username: 'admin2',
      realname: '超级管理员2',
      status: '启用',
      email: '1751619105#qq.com',
      pwdquestion: '2daye',
      pwdanswer: '2daye'
    },
    {
      id: 3,
      username: 'admin3',
      realname: '超级管理员3',
      status: '禁用',
      email: '1751619105#qq.com',
      pwdquestion: '3daye',
      pwdanswer: '3daye'
    },
    {
      id: 4,
      username: 'admin4',
      realname: '超级管理员4',
      status: '启用',
      email: '1751619105#qq.com',
      pwdquestion: '4daye',
      pwdanswer: '4daye'
    },
    {
      id: 5,
      username: 'admin5',
      realname: '超级管理员5',
      status: '启用',
      email: '1751619105#qq.com',
      pwdquestion: '5daye',
      pwdanswer: '5daye'
    }
  ],
  status: 1,
  message: 'ss'
};

axiosMock.onGet('api/member').reply(200, members);
