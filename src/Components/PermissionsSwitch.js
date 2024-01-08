import { useState } from "react";
import { Form } from 'react-bootstrap';

function PermissionsSwitch({permissions}) {
    const [thisPermissions, setPermissions] = useState(permissions);

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
          checked={thisPermissions}
          onChange={togglePermissions}
        />
      </Form>
    );
}

export default PermissionsSwitch;