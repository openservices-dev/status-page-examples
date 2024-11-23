import { get } from './client';

export async function getProjects(): Promise<any> {
  return get<any>(`${process.env.REACT_APP_STATUS_API_URL}/projects`)
    .then(response => response.data.projects);
}
