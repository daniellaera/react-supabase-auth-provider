import { Panel, Stack } from 'rsuite';

function WelcomePage() {
  return (
    <Stack direction="column" spacing={20} alignItems="center" style={{ marginTop: 30 }}>
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
        <img src="https://loremflickr.com/240/240" height="240" />
        <Panel header="RSUITE">
          <p>
            <small>
              A suite of React components, sensible UI design, and a friendly development experience.
            </small>
          </p>
        </Panel>
      </Panel>
    </Stack>
  );
}

export default WelcomePage;
