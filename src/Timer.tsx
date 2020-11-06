// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Button, Icon, Card, Statistic } from 'semantic-ui-react';

const Timer: FC = () => {
  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>Timer</Statistic.Label>
        <Statistic.Value>11</Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red">
          <Icon name="redo">Reset</Icon>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Timer;
