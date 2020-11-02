const NORMAL_USER = 1;
const ADMIN = 1024;
const MAINTAINER = 2048;

function getUserType(userPermission: number): string {
  let userType = 'Não Identificado';

  switch(userPermission) {
    case NORMAL_USER:
      userType = 'Comum';
      break;
    case ADMIN:
      userType = 'Administrador';
      break;
    case MAINTAINER:
      userType = 'Mantenedor';
      break;
  }

  return userType;
}

export default getUserType;
