import getUuidByString from 'uuid-by-string';

const showUsage = () => {
  console.log('\nUsage: yarn native-uuid <chainId>\n');
  process.exit(1);
};

const run = () => {
  const [chainId] = process.argv.slice(2);
  if (!chainId) {
    return showUsage();
  }

  console.log(getUuidByString(`${chainId}`));
};

run();
