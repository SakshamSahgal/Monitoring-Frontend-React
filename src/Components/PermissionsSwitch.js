import { useState } from "react";
import { Form } from 'react-bootstrap';

function PermissionsSwitch(props) {
    const [permissions, setPermissions] = useState(props.permissions);

    const togglePermissions = () => {
        setPermissions(!permissions);
    };

    console.log(permissions)

    return (
        <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Permission"
          checked={permissions}
          onChange={togglePermissions}
        />
      </Form>
    );
}

export default PermissionsSwitch;