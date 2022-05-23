import { fetchRequest } from '../config';

export const fetchCardsList = () => {
  return fetchRequest.get('api/data.json');
}
