import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
const Loading = () => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress &&
        <div className="loader" style={{ textAlign: "center", padding: "20%" }}>
            <>
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                </Button>{' '}
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
            Loading...
        </Button>
            </>
        </div>
    );
};

export default Loading