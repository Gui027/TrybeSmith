import jwt from 'jsonwebtoken';
import IPayload from '../Interfaces/payload.interface';

const SECRET = '12345';

const jwtConfig : {
  expiresIn: string,
  algorithm: jwt.Algorithm
} = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload: IPayload) => {
  const token = jwt.sign(payload, SECRET, jwtConfig);
    
  return token;
};

export default {
  generateToken,
};