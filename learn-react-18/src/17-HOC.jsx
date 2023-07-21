const withHigherOrderComponents = (Component) => (props) => {
  if (props.isLoading) return <div>Loading data.</div>;
  if (!props.data) return <div>No data loaded yet.</div>;
  if (!props.data.length) return <div>Data is empty.</div>;
  return <Component {...props} />;
};

const Main = () => {
  const { data, isLoading } = fetchData();
  return <TodoList data={data} isLoading={isLoading} />;
};
export default Main;

const BaseTodoLists = ({ data }) => {
  return (
    <ul>
      {data.map((e) => (
        <TodoItems key={e.id} item={item} />
      ))}
    </ul>
  );
};

const TodoList = withHigherOrderComponents(BaseTodoLists);
