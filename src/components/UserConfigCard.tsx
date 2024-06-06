import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/configureStore';
import { getAllUsers } from '../store/slices/getAllUsersSlice';
import { getAllRoles } from '../store/slices/getAllRolesSlice';
import { Formik, Form } from 'formik';
import FormikSelect from './FormikSelect';
import { postAssignRole } from '../store/slices/assignRoleSlice';
import { AssignRoleRequest } from '../models/roleModel/requests/assignRoleRequest';
import { getUser } from '../store/slices/getUserSlice';
import tokenService from '../services/tokenService';
import { removeRole } from '../store/slices/removeRoleSlice';
import { RemoveRoleRequest } from '../models/roleModel/requests/removeRoleRequest';

type Props = {};

const UserConfigCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.getAllUsers.data);
  const roles = useAppSelector((state) => state.getAllRoles.data) || []; // null kontrolü
  const managerId = useAppSelector((state) => state.getUser.data?.id);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllRoles());
    dispatch(getUser(tokenService.decodeToken()?.sub))
  }, [dispatch]);

  const handleRoleAssign = async (values:any) => {
    const assignedRole : AssignRoleRequest = {
      userId: values.userId,
      roleId: parseInt(values.roleId, 10),
      managerId: managerId || 0,
    };

    console.log('Assigned role:', assignedRole);
   await dispatch(postAssignRole(assignedRole));
   await dispatch(getAllUsers());
  };

  const handleRoleRemove = async (userId:number) => {
    const removedRole : RemoveRoleRequest = {
      userId: userId,
      managerId: managerId || 0,
    }
    await dispatch(removeRole(removedRole));
    await dispatch(getAllUsers());
    console.log('Remove role for user:', userId,managerId);
  };

  return (
    <div className='container'>
      <table className="table caption-top mt-5">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Role</th>
            <th scope="col">Assign Role</th>
            <th scope="col">Remove Role</th>
          </tr>
        </thead>
        {users?.map((user, index) => (
          <tbody key={user.id}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.username}</td>
              <td>{user.roleName}</td>
              <td>
                <Formik
                  initialValues={{ role: 0 }}
                  onSubmit={(values) => handleRoleAssign({ userId: user.id, roleId: values.role, managerId })}
                >
                  {() => (
                    <Form>
                      <FormikSelect
                        label=""
                        name="role"
                        options={roles.map(role => ({ value: role.id, label: role.name }))}
                      />
                      <button type="submit" className="btn btn-primary mt-2">
                        Assign Role
                      </button>
                    </Form>
                  )}
                </Formik>
              </td>
              <td>
                <button
                  className="btn btn-danger mt-4"
                  onClick={() => handleRoleRemove(user.id)}
                >
                  Remove Role
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UserConfigCard;
