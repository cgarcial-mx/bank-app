import { createAdaptedMovementsList } from '@api/adapters';
import { getMovementsService } from '@api/services';

export const getMovements = async () => {
  const response = await getMovementsService();
  if (!response.ok) {
    throw new Error('Error fetching movements');
  }
  const movements = await response.json();
  const adaptedMovements = createAdaptedMovementsList(movements);
  return adaptedMovements;
};
