import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/count';
import { RootState } from '../modules';

function useCounter() {
  const number = useSelector((state: RootState) => state.count.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase(1)), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease(1)), [dispatch]);

  return {
    number,
    onIncrease,
    onDecrease,
  };
}

export default useCounter;
