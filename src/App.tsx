import { useState } from 'react';
import { UsersList } from './components/UsersList';
import { PeselCheckForm } from './components/PeselCheckForm';
import { FileTextEditor } from './components/FileTextEditor';
import { TabsLayout } from './components/TabsLayout';

const App = () => {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<TabsLayout activeTab={activeTab} setActiveTab={setActiveTab}>
			{activeTab === 0 && <FileTextEditor />}
			{activeTab === 1 && <PeselCheckForm />}
			{activeTab === 2 && <UsersList />}
		</TabsLayout>
	);
};

export default App;
