/**
 * A utility component that composes multiple components by nesting them from right to left.
 * Each component in the array wraps the next one, with the children being the innermost content.
 *
 * @param {Object} props - The component props
 * @param {React.ComponentType[]} [props.components=[]] - Array of React components to compose
 * @param {React.ReactNode} props.children - The children to be wrapped by the composed components
 * @returns {JSX.Element} The composed component tree
 *
 * @example
 * // Wraps children with Provider1 and Provider2
 * <Compose components={[Provider1, Provider2]}>
 *   <App />
 * </Compose>
 *
 * // Results in: <Provider1><Provider2><App /></Provider2></Provider1>
 */
export default function Compose(props) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp, i) => {
        return <Comp key={i}>{acc}</Comp>;
      }, children)}
    </>
  );
}
