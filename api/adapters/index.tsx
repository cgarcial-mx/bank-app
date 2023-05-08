import { type Movements } from '@types/Models';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

export const createAdaptedMovementsList = (
  movements: Array<MovementsListResponse>,
): Array<Movements> => {
  return movements.map((movement) => {
    return {
      id: movement.id,
      product: movement.product,
      points: movement.points,
      createdAt: dayjs(movement.createdAt).format('DD [d]e MMMM, YYYY'),
      image: movement.image,
      isRedeemed: movement.is_redemption,
    };
  });
};
