import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTodoAsync, getTodoAsync, updateTodoAsync } from '../todoRouterApi.js';
import { useDispatch } from 'react-redux';
import { addTodoRequestAction } from '../../../store/actions/todos.actions.js';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import SubmitButton from '../../../shared/ui/SubmitButton/SubmitButton.jsx';

export function AddTodo({onAddTodo}) {
  const { todoId } = useParams();
  const [todoName, setTodoName] = useState('');
  const [todoStatus, setTodoStatus] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  let todoSchema = object({
    name: string().required().max(10),
  });

  // function changeName(event) {
  //   setTodoName(event.target.value);
  // }

  async function submit(value) {
    // @value from Formik Form
    if (todoId) {
      await updateTodoMethod({
        id: todoId,
        ...value
      });

      navigate('/todos');
    } else {
      dispatch(addTodoRequestAction(value));
    }
  }

  function updateTodoMethod(value) {
    return updateTodoAsync(todoId, value);
  }

  const loadData = async () => {
    const todo = await getTodoAsync(todoId);
    setTodoName(todo.name);
    setTodoStatus(todo.status);
  };

  useEffect(() => {
    if (todoId) {
      loadData();
    }
  }, [todoId]);

  // function validation(values) {
  //   const errors = {};
  //
  //   if (!values.name.length) {
  //     errors.name = 'Required';
  //   }
  //
  //   return errors;
  // }

  return (
    <Formik
      initialValues={{
        name: todoName,
        status: todoStatus,
      }}
      // validate={validation}
      validationSchema={todoSchema}
      enableReinitialize={true}
      onSubmit={submit}
    >
      <Form className="todo">
        <Field name="name" type="text" />
        <ErrorMessage  name="name" component="div" />

        <Field name="status" type="checkbox" />

        <SubmitButton />
      </Form>
    </Formik>
  )
}