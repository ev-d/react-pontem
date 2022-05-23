import { useRef, useCallback } from 'react';
import { useVirtual } from 'react-virtual-latest';

import Card from '../../common/ui/Card';

import styles from './CardsListVirtualizer.module.css';

const CardsListVirtualizer = ({ cardsList }) => {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: cardsList.length,
    parentRef,
    estimateSize: useCallback(() => 183, []),
    overscan: 5,
  });

  return (
    <>
      <div
        ref={parentRef}
        className={styles.list}
        style={{
          width: `100vw`,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: '640px',
            position: 'relative',
          }}
        >
          {rowVirtualizer.virtualItems.map(virtualRow => {
            return (
              <div
                key={virtualRow.index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <Card data={cardsList[virtualRow.index]} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default CardsListVirtualizer;
