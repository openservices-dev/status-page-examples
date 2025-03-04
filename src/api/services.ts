import { get } from './client';
import { projects } from './projects';

export async function getProjects(namespace?: string): Promise<any> {
  if (typeof process.env.REACT_APP_STATUS_API_URL === 'undefined' || process.env.REACT_APP_STATUS_API_URL === '') {
    return projects;
  }
  
  return get<any>(`${process.env.REACT_APP_STATUS_API_URL}/namespaces/${namespace}/projects`)
    .then(response => response.data.projects);
}
