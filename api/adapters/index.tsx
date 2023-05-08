import { type Movements } from '@types/Models';

export const createAdaptedMovementsList = (
  movements: Array<MovementsListResponse>,
): Array<Movements> => {
  return movements.map((movement) => {
    return {
      id: movement.id,
      product: movement.product,
      points: movement.points,
      createdAt: movement.createdAt,
      image: movement.image,
      isRedeemed: movement.is_redemption,
    };
  });
};
