type TProps<T> = {
  layout: JSX.ElementType;
  component: JSX.ElementType;
  layoutProps: T;
};
const RouteWithLayout = <T extends object>({
  layout: Layout,
  component: Component,
  layoutProps,
}: TProps<T>) => {
  return (
    <Layout {...layoutProps}>
      <Component />
    </Layout>
  );
};
export default RouteWithLayout;
