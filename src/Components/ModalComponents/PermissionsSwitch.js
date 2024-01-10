import { useState } from "react";
import { Form } from 'react-bootstrap';
import { AxiosPUT } from "../../Scripts/AxiosRequest";

function PermissionsSwitch({permissions,Name}) {
    const [thisPermissions, setPermissions] = useState(permissions);

    const togglePermissions = async () => {
        const response = await AxiosPUT('/togglePermissions/' + Name + "/" + !permissions, {})
        console.log(response)
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