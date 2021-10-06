import React from "react";
import { Card, Button, Alert, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../actions/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Card bg="secondary" className="mx-auto w-50">
      <Card.Body className="mx-auto">
        <Alert variant="info">
          شمارش :{" "}
          <Badge pill variant="success">
            {counter}
          </Badge>
        </Alert>
        <Button
          variant="danger"
          className="fa fa-plus m-2"
          onClick={() => dispatch(increment())}
        />
        <Button
          variant="danger"
          className="fa fa-minus m-2"
          onClick={() => dispatch(decrement())}
        />
      </Card.Body>
    </Card>
  );
};

export default Counter;
